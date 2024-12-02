import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {

    const coffee = useLoaderData();
    const { name, chef, supplier, teste, category, price, details, photo } = coffee;

    return (
        <div className="flex flex-col justify-center items-start mx-auto mt-12 gap-4 bg-slate-900 rounded-xl p-4 w-[300px] relative">
            <div className="col-span-2 w-full h-[200px] rounded-xl">
                <img className="w-full h-full rounded-xl" src={photo} />
            </div>
            <div className="col-span-3 text-white">
                <h1 className="text-2xl font-bold text-center py-4">{name}</h1>
                <h1>Chef : {chef}</h1>
                <h1>Price : {price}$</h1>
                <h1>Supplier : {supplier}</h1>
                <h1>Teste : {teste}</h1>
                <h1>Category : {category}</h1>
            </div>
            <div>
                <h1 className="text-xl font-bold my-2">Description: </h1>
                <h1>{details}</h1>
            </div>
            <Link to='/coffees'>
                <div className="absolute top-0 right-0 font-bold bg-red-500 rounded-full w-10 h-10 flex justify-center items-center" >X</div>
            </Link>

        </div>
    );
};

export default CoffeeDetails;