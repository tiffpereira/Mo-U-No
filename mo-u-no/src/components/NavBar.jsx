import { Link } from 'react-router-dom'

export default function NavBar () {
    return (
        <div>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/dictionary'> Dictionary</Link>
            </div>
        </div>
    )
}