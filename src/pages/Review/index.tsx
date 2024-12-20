import './style.css'
import img1 from '../../images/review1.jpg'
import img2 from '../../images/review2.jpg'
import img3 from '../../images/review3.jpg'

const ReviewPage = () => {
    return (
        <div>
            <h1 className='page-title'>Review</h1>
            <div className='container-review'>
              <img src={img1} alt="review 1" />
              <img src={img2} alt="review 2" />
              <img src={img3} alt='review 3' />
            </div>
        </div>
    )
}

export default ReviewPage;