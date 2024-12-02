import { Link } from "react-router-dom";

const AddCoffee = () => {


    const handleAddProduct = (e) => {
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
        const coffee = { name, chef, supplier, teste, category, price, details, photo };
        console.log('New Data', coffee);


        fetch('http://localhost:7000/coffees', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(d => {
                if (d.insertedId) {
                    console.log(d);
                }
            }
            )
    }

    return (
        <div>
            <div className='py-12 px-4 bg-slate-900'>
                <h1 className='text-4xl font-bold text-center'>Add Coffee</h1>
                <form onSubmit={handleAddProduct} className='w-[300px] mx-auto px-4 py-8'>

                    <label className="input input-bordered flex items-center gap-2">
                        Name
                        <input type="text" name='name' className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Chef:
                        <input type="text" name='chef' className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Supplier:
                        <input type="text" name='supplier' className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Teste:
                        <input type="text" name='teste' className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Category:
                        <input type="text" name='category' className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Price:
                        <input type="text" name='price' className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Details:
                        <input type="text" name='details' className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        PhotoURL:
                        <input type="text" name='photo' className="grow" />
                    </label>

                    <input className='btn' type="submit" value="Add Coffee" />
                </form>

                <div className='flex justify-center items-center p-4'>
                    <Link className='btn btn-primary' to='/coffees'>Go to Coffees</Link>
                </div>

            </div>
        </div>
    );
};

export default AddCoffee;