import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const { signInAccount, setErrorMessage,
        errorMessage , setUser, signInAccountWithGoogle, setLoading} = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        const newUser = { email, password };

        signInAccount(email, password)
            .then(result => {
                if (result.user) {
                    setErrorMessage('LogIn Successfull');
                    setUser(newUser);
                    navigate('/');
                    form.email.value = '';
                    form.password.value= '';
                } else {
                    setErrorMessage('');
                }
            }
            ).catch(error => setErrorMessage(error.message)
            )
    }

    const handleSignInWithGoogle = () => {
        signInAccountWithGoogle()
            .then(result => {
                navigate('/')
                console.log(result.user)
                setLoading(true)
            }
            ).catch(error => console.log(error)
            )
    }

    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center pt-6">Login now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <h1 className="py-4 text-center">{ errorMessage}</h1>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value='LogIn' className="btn btn-primary" />
                        </div>
                    </form>
                    <div className="py-4 flex justify-center">
                        <button onClick={handleSignInWithGoogle} className="btn btn-sm">SignIn with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;