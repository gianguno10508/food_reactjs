import '../styles/footer_styles.css';

function Footer() {
    return (
      <div className="footer">
          <div className='container'>
            <div className='row'>
                <div className='col col-md-4'>
                  <h2>BambooFood</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='col col-md-4 andress'>
                  <h2>Andress</h2>
                  <p><span><i className="fa-solid fa-location-dot icon"></i>Son Dong, Bac Giang</span></p>
                  <p><span><i className="fa-solid fa-phone icon"></i>0123456789</span></p>
                  <p><span><i className="fa-solid fa-envelope icon"></i>Gianguno10508@gmail.com</span></p>
                  <p><span><i className="fa-brands fa-facebook icon"></i>Gianguno10508</span></p>
                </div>
                <div className='col col-md-4'>
                  <h2>Contact for me</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap into electronic typesetti</p>
                </div>
            </div>
          </div>
          <div className='end-footer'>
            <span>NVG-2022<i className="fa-solid fa-copyright"></i></span>
          </div>  
      </div>    
    );
}
  
export default Footer;