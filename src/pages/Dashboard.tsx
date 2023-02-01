export default function Dashboard () {
  return (
    <>
      <header className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
        <a className='navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6' href='#'>Cielos Travel</a>
        <button className='navbar-toggler position-absolute d-md-none collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#sidebarMenu' aria-controls='sidebarMenu' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='navbar-nav'>
          <div className='nav-item text-nowrap'>
            <a className='nav-link px-3' href='#'>Sign out</a>
          </div>
        </div>
      </header>
      <div className='container-fluid'>
        <div className='row'>
          <nav id='sidebarMenu' className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'>
            <div className='position-sticky pt-3 sidebar-sticky'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='/dashboard'>
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'><div className='chartjs-size-monitor'><div className='chartjs-size-monitor-expand'><div className='' /></div><div className='chartjs-size-monitor-shrink'><div className='' /></div></div>
            <div className='is-flex justify-content-between flex-wrap flex-md-nowrap is-align-items-center pt-3 pb-2 mb-3 border-bottom'>
              <h1 className='h2'>Dashboard</h1>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
