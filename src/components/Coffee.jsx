import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";


const Coffee = ({ coffee }) => {

    const { coffeesData, setCoffeesData } = useContext(AuthContext);

    const { _id, name, price, photo, chef } = coffee;

    const handleDeleteItem = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:7000/coffees/${id}`, {
                    method: 'DELETE',
                }).then(res => res.json()).then(result => {
                    if (result.deletedCount > 0) {
                        console.log(result);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remainingData = coffeesData.filter(coffee => id !== coffee._id);
                        setCoffeesData(remainingData);
                    }
                })
            }
        });

        
    };

    return (
        <div className="grid grid-cols-6 h-[200px] p-4 gap-4 rounded-xl justify-between items-center bg-purple-800">
            <div className="col-span-2 w-full h-[168px] rounded-xl">
                <img className="w-full h-full rounded-xl" src={photo} />
            </div>
            <div className="col-span-3 text-white">
                <h1>Chef: {chef}</h1>
                <h1>Price: {price}$</h1>
                <h1>Name: {name}</h1>
            </div>
            <div className="flex flex-col gap-2">
                <Link to={`/coffeeDetails/${_id}`}><button className="btn btn-primary">Details</button></Link>
                <Link to={`/updateCoffee/${_id}`}><button className="btn btn-accent">Edit</button></Link>
                <button onClick={() => handleDeleteItem(_id)} className="btn bg-red-600">Del</button>
            </div>

        </div>
    );
};

Coffee.propTypes = {
    coffee: PropTypes.object
}

export default Coffee;