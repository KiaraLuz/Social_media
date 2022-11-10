import './rightBar.scss';

export const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions For You</span>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://emprendedor.com/wp-content/uploads/2021/08/20180320152933-gente-feliz.jpeg' alt=''/>
              <span>Jane Doe</span>
            </div>
            <div className='buttons'>
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://emprendedor.com/wp-content/uploads/2021/08/20180320152933-gente-feliz.jpeg' alt=''/>
              <span>Jane Doe</span>
            </div>
            <div className='buttons'>
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className='item'>
          <span>Latest Activities</span>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://emprendedor.com/wp-content/uploads/2021/08/20180320152933-gente-feliz.jpeg' alt=''/>
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <div className='tiempo'>1 min ago</div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://emprendedor.com/wp-content/uploads/2021/08/20180320152933-gente-feliz.jpeg' alt=''/>
              <p>
                <span>Jane Doe</span> like a post
              </p>
            </div>
            <div className='tiempo'>1 min ago</div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://emprendedor.com/wp-content/uploads/2021/08/20180320152933-gente-feliz.jpeg' alt=''/>
              <p>
                <span>Jane Doe</span> liked a comment
              </p>
            </div>
            <div className='tiempo'>1 min ago</div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://emprendedor.com/wp-content/uploads/2021/08/20180320152933-gente-feliz.jpeg' alt=''/>
              <p>
                <span>Jane Doe</span> posted
              </p>
            </div>
            <div className='tiempo'>1 min ago</div>
          </div>
        </div>

        <div className='item'>
          <span>Online Friends</span>
          <div className='user'>
            <div className='userInfo'>
              <img src='https://emprendedor.com/wp-content/uploads/2021/08/20180320152933-gente-feliz.jpeg' alt=''/>
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>

          <div className='user'>
            <div className='userInfo'>
              <img src='https://emprendedor.com/wp-content/uploads/2021/08/20180320152933-gente-feliz.jpeg' alt=''/>
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>

          <div className='user'>
            <div className='userInfo'>
              <img src='https://emprendedor.com/wp-content/uploads/2021/08/20180320152933-gente-feliz.jpeg' alt=''/>
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>

          <div className='user'>
            <div className='userInfo'>
              <img src='https://emprendedor.com/wp-content/uploads/2021/08/20180320152933-gente-feliz.jpeg' alt=''/>
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>

          <div className='user'>
            <div className='userInfo'>
              <img src='https://emprendedor.com/wp-content/uploads/2021/08/20180320152933-gente-feliz.jpeg' alt=''/>
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
