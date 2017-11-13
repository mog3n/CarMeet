# `car social media, backend`

MongoDB:
* 'colUsers' = 'users'
* 'colUserData' = 'userdata'

Routes:
* /api: Token authentication (token) -> next()
* /api/sessions: Users logged in
* /api/users: List of all users -> {users, userdata}
* /auth: Login (req.body.username, req.body.password) -> {success, token}
* /new_user: Create new user req.body.(username, password, email) -> {success, redirect} | {success, error, message}