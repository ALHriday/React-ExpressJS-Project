import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const { createNewUser, setErrorMessage, errorMessage, isTrue, setIsTrue, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const newUser = {name, email, password };

        createNewUser(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    // setUser(newUser);
                    setLoading(true);
                    setIsTrue(true);
                    setErrorMessage('Account Created Successfull');
                    navigate('/')
                } else {
                    setIsTrue(false)
                }
            }).catch(error => setErrorMessage(error.message)
            )

            // Register User Data

            fetch('https://coffee-store-rosy.vercel.app/user', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(n => {
                    if (n.insertedId) {
                        alert('data post hoice!!!');
                        console.log(n);
                    }
                }
                )
    }

    return (
        <div>

            <div className="hero bg-base-200 min-h-screen py-6">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center pt-6">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value='Register' className="btn btn-primary" />
                            {isTrue ? <h1 className="text-center text-green-400 py-4">{errorMessage}</h1>
                                : <h1 className="text-center text-red-500 py-4">{errorMessage}</h1>}

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;