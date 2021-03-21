import {Link} from 'react-router-dom';
function SelectState(){
    const states=["Karnataka","Chandigarh","Uttar Pradesh","Meghalaya","Pondicherry","Haryana","Andaman and Nicobar Islands",
                "Kerala","Gujrat","Maharastra","Nagaland","Rajasthan","Punjab","Goa","Assam","Jharkhand","Dadra and Nagar Haveli",
            "Arunachal Pradesh","Chhattisgarh","Andhra Pradesh","Jammu and Kashmir","Bihar","Uttarakhand","Mizoram","West Bengal","Delhi","Sikkim","Daman and Diu",
        "Manipur","Odisha","Himachal Pradesh","Lakshadweep","Tripura","Tamil Nadu"];
        states.sort();
  
        return(<div className="container">
            <h2 className="text-center">Select a state</h2>
            <div className="row mt-3">
                {states.map(state=>
                <div className="col-md-3 col-sm-3 pb-2 d-flex justify-content-center">
                    <Link to={"/states/"+state}  Style={"text-decoration:none;"}>
                        <button key={state} className= "btn btn-outline-danger" > 
                        {state}
                        </button>
                    </Link>
                </div>
                )}
            </div>
            </div>
        )
}

export default SelectState;