import react from 'react'
import './styles/footer.css'
import logoMessages from '../../images/comment.png'
import logoUser from '../../images/user.png'
import logoSettings from '../../images/settings.svg'
class Messages extends react.Component
{
    render()
    {
       return (
          <div className="footer">
           <div class="logo"><img src={logoMessages} width="40"></img></div>
           <div class="logo"><img src={logoUser} width="40"></img></div>
           <div class="logo"><img src={logoSettings} width="40"></img></div>
          </div>
       )
    }
}

export default Messages


