import {useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {ToastContainer} from 'react-toastify'
import {Container} from 'react-bootstrap'
import Cookies from 'js-cookie'

import NavBarComponent from './components/homePageComponents/Navbar/navBarComp'
import ContactsCard from
  './components/homePageComponents/ContactsCard/ContactsCard'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Footer from './components/homePageComponents/Footer/Footer'
import {getDishesFromApiTC} from '../src/redux/reducers/dishesReducer'
import {getUserPersonalDataTC} from '../src/redux/reducers/userReducer'

import MenuRoutes from './pages/menuPage/Menu/MenuRoutes'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import AdminRoutes from './pages/adminPage/Admin/AdminRoutes'


import {IAuthResponse} from './common/types/authResponseTypes'

import {url} from './api/index'

import {checkAuth} from './redux/actions'

import SwitchPager from './utils/swich'

import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css'
import './App.scss'

const App = () => {
  const dispatch = useDispatch()

  const handleAuthCheck = async () => {
    const response = await axios.get<IAuthResponse>(
      `${url}/refreshUser`,
      {withCredentials: true}
    )
    Cookies.set('token', response.data.accessToken, {expires: 30})
    dispatch(checkAuth())
  }

  useEffect(() => {
    if (Cookies.get('token')) {
      handleAuthCheck()
    }

    dispatch(getDishesFromApiTC())
    dispatch(getUserPersonalDataTC())
  }, [])

  return (
    <Router>
      <ErrorBoundary >
        <div>
          <ToastContainer
            position='top-right'
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
        <div className='App'>
          <header className='App-header'>
            <NavBarComponent />
          </header>
          <main className='main'>
            <SwitchPager />
            <ScrollToTop />
            <Container>
              <MenuRoutes />
              <AdminRoutes />
            </Container>
          </main>
          <ContactsCard />
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  )
}

export default App
