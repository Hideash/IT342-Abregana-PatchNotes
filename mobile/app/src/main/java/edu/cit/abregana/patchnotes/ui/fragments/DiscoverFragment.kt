package edu.cit.abregana.patchnotes.ui.fragments

import android.content.Intent
import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import edu.cit.abregana.patchnotes.R
import edu.cit.abregana.patchnotes.api.RetrofitClient
import edu.cit.abregana.patchnotes.model.PatchModel
import edu.cit.abregana.patchnotes.model.UserModel
import edu.cit.abregana.patchnotes.ui.PatchDetailActivity
import edu.cit.abregana.patchnotes.ui.UserProfileActivity
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

class DiscoverFragment : Fragment() {

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_discover, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val etSearch = view.findViewById<EditText>(R.id.etSearch)
        val patchesContainer = view.findViewById<LinearLayout>(R.id.patchesContainer)
        val usersContainer = view.findViewById<LinearLayout>(R.id.usersContainer)
        val tabPatches = view.findViewById<TextView>(R.id.tabPatches)
        val tabUsers = view.findViewById<TextView>(R.id.tabUsers)
        val patchesSection = view.findViewById<View>(R.id.patchesSection)
        val usersSection = view.findViewById<View>(R.id.usersSection)

        var searchJob: Job? = null
        var activeTab = "patches"

        fun switchTab(tab: String) {
            activeTab = tab
            if (tab == "patches") {
                patchesSection.visibility = View.VISIBLE
                usersSection.visibility = View.GONE
                tabPatches.setTextColor(0xFF59000A.toInt())
                tabUsers.setTextColor(0xFF888888.toInt())
            } else {
                patchesSection.visibility = View.GONE
                usersSection.visibility = View.VISIBLE
                tabPatches.setTextColor(0xFF888888.toInt())
                tabUsers.setTextColor(0xFF59000A.toInt())
            }
        }

        tabPatches.setOnClickListener { switchTab("patches") }
        tabUsers.setOnClickListener { switchTab("users") }

        loadAll(patchesContainer, usersContainer)

        etSearch.addTextChangedListener(object : TextWatcher {
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {}
            override fun afterTextChanged(s: Editable?) {
                searchJob?.cancel()
                searchJob = lifecycleScope.launch {
                    delay(400)
                    val query = s.toString().trim()
                    if (query.isEmpty()) loadAll(patchesContainer, usersContainer)
                    else search(query, patchesContainer, usersContainer)
                }
            }
        })
    }

    private fun loadAll(patchContainer: LinearLayout, userContainer: LinearLayout) {
        lifecycleScope.launch {
            try {
                val api = RetrofitClient.getClient(requireContext())
                val patchRes = api.getPatches()
                val userRes = api.searchUsers("")
                if (patchRes.isSuccessful) displayPatches(patchRes.body()?.filter { !it.member } ?: emptyList(), patchContainer)
                if (userRes.isSuccessful) displayUsers(userRes.body() ?: emptyList(), userContainer)
            } catch (e: Exception) { }
        }
    }

    private fun search(query: String, patchContainer: LinearLayout, userContainer: LinearLayout) {
        lifecycleScope.launch {
            try {
                val api = RetrofitClient.getClient(requireContext())
                val patchRes = api.searchPatches(query)
                val userRes = api.searchUsers(query)
                if (patchRes.isSuccessful) displayPatches(patchRes.body()?.filter { !it.member } ?: emptyList(), patchContainer)
                if (userRes.isSuccessful) displayUsers(userRes.body() ?: emptyList(), userContainer)
            } catch (e: Exception) { }
        }
    }

    private fun displayPatches(patches: List<PatchModel>, container: LinearLayout) {
        container.removeAllViews()
        if (patches.isEmpty()) {
            val tv = makeEmptyView("No patches found.")
            container.addView(tv)
            return
        }
        patches.forEach { patch ->
            val item = LayoutInflater.from(context).inflate(R.layout.item_patch, container, false)
            item.findViewById<TextView>(R.id.tvPatchIcon).text = patch.icon ?: "🎮"
            item.findViewById<TextView>(R.id.tvPatchName).text = patch.name
            item.findViewById<TextView>(R.id.tvPatchDesc).text = patch.description ?: "No description."
            item.findViewById<TextView>(R.id.tvMemberCount).text = "${patch.memberCount} members"
            item.findViewById<Button>(R.id.btnJoin).setOnClickListener {
                lifecycleScope.launch {
                    try {
                        RetrofitClient.getClient(requireContext()).joinPatch(patch.id)
                        loadAll(container, requireView().findViewById(R.id.usersContainer))
                    } catch (e: Exception) { }
                }
            }
            item.setOnClickListener {
                val intent = Intent(context, PatchDetailActivity::class.java)
                intent.putExtra("patchId", patch.id)
                startActivity(intent)
            }
            container.addView(item)
        }
    }

    private fun displayUsers(users: List<UserModel>, container: LinearLayout) {
        container.removeAllViews()
        if (users.isEmpty()) {
            container.addView(makeEmptyView("No users found."))
            return
        }
        users.forEach { user ->
            val item = LayoutInflater.from(context).inflate(R.layout.item_user, container, false)
            item.findViewById<TextView>(R.id.tvUserAvatar).text =
                user.username?.firstOrNull()?.uppercaseChar()?.toString() ?: "?"
            item.findViewById<TextView>(R.id.tvUserName).text = user.username ?: user.firstName ?: "User"
            item.findViewById<TextView>(R.id.tvUserEmail).text = user.email
            val btnAdd = item.findViewById<Button>(R.id.btnAdd)
            btnAdd.text = if (user.following) "✓ Added" else "+ Add"
            btnAdd.setOnClickListener {
                lifecycleScope.launch {
                    try {
                        RetrofitClient.getClient(requireContext()).toggleFollow(user.email)
                        loadAll(requireView().findViewById(R.id.patchesContainer), container)
                    } catch (e: Exception) { }
                }
            }
            item.setOnClickListener {
                val intent = Intent(context, UserProfileActivity::class.java)
                intent.putExtra("email", user.email)
                startActivity(intent)
            }
            container.addView(item)
        }
    }

    private fun makeEmptyView(text: String): TextView {
        val tv = TextView(context)
        tv.text = text
        tv.setTextColor(0xFF444444.toInt())
        tv.textSize = 13f
        tv.setPadding(0, 32, 0, 0)
        tv.gravity = android.view.Gravity.CENTER
        return tv
    }
}