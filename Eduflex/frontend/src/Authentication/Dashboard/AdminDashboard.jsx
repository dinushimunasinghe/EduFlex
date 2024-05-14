import React from 'react'
import AdminProfileLayouts from '../../Layouts/ProfileLayouts/AdminProfileLayouts'

function AdminDashboard(props) {
  return (
    <div>
      <AdminProfileLayouts>
        {props.children}
      </AdminProfileLayouts>
    </div>
  )
}

export default AdminDashboard