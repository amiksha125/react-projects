import React from 'react'

const NotFoundContact = () => {
  return (
    <div className="flex flex-col h-[60vh] justify-center items-center gap-4">
  <div>
    <img src="/contact.png" alt="contact" />
  </div>
  <h3 className="text-white text-2xl font-semibold">Contact Not Found</h3>
</div>
  )
}

export default NotFoundContact