import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {

    const { user, LogOutUser, setUser } = useContext(AuthContext);

    const handleLogOut = () => {
      LogOutUser()
        .then(() => {
          console.log('LogOut Successfull');
          setUser(null);
        }
        ).catch(error => console.log(error))
    }

    return (
        <div>
            <div className='flex justify-evenly items-center px-4 py-2'>
        <h1 className='text-xl font-bold'>Logo</h1>
        <div className='flex gap-4'>
          <Link className='btn btn-sm' to='/'>Home</Link>
          <Link className='btn btn-sm' to='/add-coffee'>Add Coffee</Link>
          <Link className='btn btn-sm' to='/coffees'>Coffees</Link>
          {user ? <Link className='btn btn-sm' to='/About'>About</Link> : ''}
          
        </div>

        <div className='flex gap-4 justify-center items-center'>
          <div>
            <h1>{user && <img className='w-8 h-8 rounded-full p-[2px] bg-slate-100' src="https://img.icons8.com/?size=100&id=7820&format=png&color=000000" title={user?.displayName} alt="" /> || user?.email}</h1>
          </div>
          {user ? <Link onClick={handleLogOut} className='btn btn-sm' to='/Login'>LogOut</Link> : <div>
            <Link className='btn btn-sm' to='/Register'>Register</Link>
            <Link className='btn btn-sm' to='/Login'>Login</Link>
          </div>}

        </div>
      </div>
        </div>
    );
};

export default Navbar;