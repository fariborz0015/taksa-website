import Layout from '@/layout/Layout'
import Providers from '@/providers/Providers'
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import 'animate.css';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Providers>
        <ToastContainer
          position="top-center"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </QueryClientProvider>
  )
}
