'use client'
import { Autocomplete, Box, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetcher } from '../utility/fetcher';
import { SearchResult, SingleResult } from '../datatypes/serachResult.model';
import homePageStar from '../../public/homepagestar.png'
import Image from 'next/image';
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 }]


export default function page() {
    const [searchParameter, setSearchParameter] = useState(undefined);
    const [serachResultBranded, setSearchResultBranded] = useState<SingleResult[]>([]);
    const [serachResultCommon , setSerachResultCommon] = useState<SingleResult[]>([]);
    const getData = async () => {
    const result:SearchResult = await fetcher(`/v2/search/instant/?query=${searchParameter}`,{method: "GET" , cache: 'no-cache'});
    if(result && result.branded && result.common) {
        setSearchResultBranded(result.branded);
        setSerachResultCommon(result.common);
    } 
    }
    useEffect(()=>{
        if(searchParameter) {
            getData();
        }
    }, [searchParameter])
  return (
    <>
    <div className="w-full flex justify-center">
    <div className='w-[26rem]'>
        <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={serachResultBranded.map((option) => option.food_name)}
        renderInput={(params) => <TextField {...params} label="Search your favourite food..." value={searchParameter} onChange={e=> setSearchParameter(e.target.value)}/>}
        // onChange={getData}
      />
    </div>
    </div>
    <div className="w-full flex">
        <div className='flex-1 p-4'>
            <div className="container mx-auto p-4">
                <div className="flex flex-wrap -m-2">

            {
                serachResultCommon && serachResultCommon.map( result => 
                <div className='w-1/2 p-2 h-[150px]' key={result.tag_id}>
                    <div className="shadow-md rounded-lg p-4 flex h-full">
                        <div className="w-3/5 p-2 h-full">
                            {
                                result.food_name.length > 12 ? 
                                <h2 className="text-lg font-bold">{result.food_name.split(" ").slice(0,2).join(' ')}...</h2>
                                :<h2 className="text-lg font-bold">{result.food_name}</h2>
                            }
                            <p>{`Serving qty : ${result.serving_qty}`}</p>
                            {
                                result.serving_unit.length > 10 ?
                                <p>{`Serving unit : ${result.serving_unit.slice(0, 10)}...`}</p>
                                : <p>{`Serving unit : ${result.serving_unit}`}</p>
                            }
                            
                        </div>
                        <div className="w-2/5 p-2 h-full">
                            <img src={`${result.photo.thumb}`} alt='' className='w-full h-full object-fill'
                            />
                        </div>
                    </div> 
                </div>
                )
            }
                </div>
            </div>
        </div>
        <div className='flex-1 p-4'>
            <div className="container mx-auto p-4">
                <div className="flex flex-wrap -m-2">
                    {
                        serachResultBranded && serachResultBranded.map(result => 
                            <div className='w-1/2 p-2 h-[150px]' key={result.tag_id}>
                                <div className="shadow-md rounded-lg p-4 flex h-full">
                                    <div className="w-3/5 p-2 h-full">
                                        {
                                            result.food_name.length > 12 ? 
                                            <h2 className="text-lg font-bold">{result.food_name.split(" ").slice(0,2).join(' ')}...</h2>
                                            :<h2 className="text-lg font-bold">{result.food_name}</h2>
                                        }
                                        <p>{`Serving qty : ${result.serving_qty}`}</p>
                                        {
                                            result.serving_unit.length > 10 ?
                                            <p>{`Serving unit : ${result.serving_unit.slice(0, 10)}...`}</p>
                                            : <p>{`Serving unit : ${result.serving_unit}`}</p>
                                        }
                                    </div>
                                    <div className="w-2/5 p-2 h-full">
                                        <img src={`${result.photo.thumb}`} alt='' className='w-full h-full object-fill'
                                        />
                                    </div>
                                </div> 
                            </div>
                            )
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

