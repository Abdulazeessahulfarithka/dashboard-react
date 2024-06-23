import React from 'react'

const card = ({title,color}) => {
  return (
    <>
    <div class="col-xl-2  col-md-6 mb-4">
      <div class={`card ${color} shadow h-100 py-2`}>
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}
              >
                {title}
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
              
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-calendar fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default card