import Input from "components/lib/inputs/Input";
import { Search } from "react-feather";
import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from 'components/lib/button/Button';



const BottomNavigationSearch = () => {
    const router = useRouter()
    const [value, setvalue] = useState('')


    const search = async () => {
        router.push(`/courses?search=${value}`)
    }


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
                            icon={
                                <Search
                                    size={20}
                                    onClick={() => search()}
                                />}
                            width="100%"
                            disabled={false}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setvalue(e.currentTarget.value)
                            }}
                            value={value}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter')
                                    search()
                            }}
                        />
                        {value.length > 0 && (
                            <Button
                                className="course-form-btn"
                                width="100%"
                                style={{
                                    margin: '3rem 0'
                                }}
                                size="large"
                                color="black"
                                onClick={() => search()}
                            // route="#"
                            >
                                <p className="f-weight-r f-size-p4 ">მოძებნა</p>
                            </Button>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default BottomNavigationSearch
