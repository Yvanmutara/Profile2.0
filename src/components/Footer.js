import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                    {/* <script>document.write(new Date().getFullYear())</script> © Velzon. */}
                </div>
                <div className="col-sm-6">
                    { date } © YM.
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
