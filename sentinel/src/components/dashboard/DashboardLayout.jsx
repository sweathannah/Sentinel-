<div className="flex">
  <Sidebar />
  <div className="flex-1">
    <Header />
    <main>{children}</main> {/* Dynamic content like DashboardPage, ReportsPage */}
  </div>
</div>
