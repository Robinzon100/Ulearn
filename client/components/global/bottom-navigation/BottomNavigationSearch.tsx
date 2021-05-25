import Input from "components/lib/inputs/Input";
// import { useState } from "react";
import { Search,X } from "react-feather";



const BottomNavigationSearch = () => {




    return (
        <>
            <div className="bottom-search" >
                <div className="bottom-search--container">
                    <div className="search-input">
                    <Input
                        color="white"
                        size="medium"
                        type="text"
                        placeHolder="მოძებნე სასურველი კურსი"
                        icon={<Search size={20} />}
                        // iconRight={<X size={20}  />}
                        width="100%"
                        disabled={false}
                        // className="search"
                    />
                    </div>
                </div>  
            </div>
            
        </>
    )
}

export default BottomNavigationSearch
