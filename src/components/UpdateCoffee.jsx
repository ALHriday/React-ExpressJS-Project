
import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {
    const coffees = useLoaderData();
    
    const {_id, name, chef, supplier, teste, category, price, details, photo } = coffees;

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const teste = form.teste.value;
        const category = form.category.value;
        const price = form.price.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, chef, supplier, teste, category, price, details, photo };
        console.log('New Data', updatedCoffee);


        fetch(`http://localhost:7000/coffees/${_id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json",},
            body: JSON.stringify(updatedCoffee)
        }).then(res => res.json()).then(result => {
            if (result.modifiedCount > 0) {
                console.log(result)
            }
        }
        )
    }

    return (
        <div>

            <div className='py-12 px-4 bg-slate-200'>
                <h1 className='text-4xl font-bold text-center'>Update Coffee</h1>
                <form onSubmit={handleUpdateProduct} className='w-[350px] mx-auto px-4 py-8'>

                    <label className="input input-bordered flex items-center gap-2">
                        Name
                        <input type="text" name='name' defaultValue={name} className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Chef:
                        <input type="text" name='chef' defaultValue={chef} className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Supplier:
                        <input type="text" name='supplier' defaultValue={supplier} className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Teste:
                        <input type="text" name='teste' defaultValue={teste} className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Category:
                        <input type="text" name='category' defaultValue={category} className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Price:
                        <input type="text" name='price' defaultValue={price} className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Details:
                        <input type="text" name='details' defaultValue={details} className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        PhotoURL:
                        <input type="text" name='photo' defaultValue={photo} className="grow" />
                    </label>

                    <input className='btn' type="submit" value="Update Coffee" />
                </form>

            </div>
        </div>
    );
};

export default UpdateCoffee;