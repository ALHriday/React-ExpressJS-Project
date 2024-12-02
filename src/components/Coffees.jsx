import { Link, useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Coffees = () => {

    const { coffeesData, setCoffeesData } = useContext(AuthContext);
    const coffees = useLoaderData();
    
    useEffect(() => {
        setCoffeesData(coffees);
    }, [coffees, setCoffeesData]);

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold text-center py-8">Coffees</h1>
            <div className="grid grid-cols-2 gap-6">
                {coffeesData.map((coffee, i) => <Coffee key={i} coffee={coffee}></Coffee>)}
            </div>
            <div className="flex justify-center items-center p-4">
                <Link className='btn btn-primary' to='/add-coffee'>Go to Add Coffee</Link>
            </div>
        </div>
    );
};

export default Coffees;