import React from 'react'

export default function Skeleton() {
  return (
    <div className="shadow rounded-xl-md p-5 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2.5 bg-slate-700 rounded-xl"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-4 gap-4">
              <div className="h-2.5 bg-slate-700 rounded-xl col-span-3"></div>
              <div className="h-2.5 bg-slate-700 rounded-xl col-span-2"></div>
              <div className="h-2.5 bg-slate-700 rounded-xl col-span-1"></div>
              <div className="h-2.5 bg-slate-700 rounded-xl col-span-2"></div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
