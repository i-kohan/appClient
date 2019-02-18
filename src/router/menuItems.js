const privateRoutes = [
  {
    path: '/profile',
    title: 'Profile',
  },
  {
    path: '/myAccount',
    title: 'My Account',
  },
  {
    path: '/logout',
    title: 'Logout',
  },
]

const publicRoutes = [
  {
    path: './home',
    title: 'Home',
  },
]

export default isLoggedIn => !isLoggedIn ? publicRoutes : publicRoutes.concat(privateRoutes)
