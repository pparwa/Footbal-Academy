import React,{ useEffect, useReducer, useState } from 'react';
import { CircularProgress } from "@mui/material";
import { MatchTable } from './Table';
import { MatchesList } from './MatchList';


export const MatchPage = ()=>{

  let [matches,setmatches] = useState(null)
  let [state , dispatch] = useReducer((prevstate,nextstate)=>{
    return {...prevstate,...nextstate}
  },{
    
        filterMatches:null,
        playedFilter:'All',
        resultFilter: 'All'
    
  })
  useEffect(()=>{
  if(!matches){
    (async()=>{
      let res = await fetch("http://localhost:5000/matches")
      let data = await res.json()
      setmatches(data)
      dispatch({...state, filterMatches: matches})
    })()
  }
  },[matches])
  const showPlayed = (limit)=>{

   let newmatches =  matches.filter(match=>{
      return match.final == limit
    })
    dispatch({
      ...state,
      filterMatches:limit == "All"? matches : newmatches,
      playedFilter:limit,
      resultFilter:'All'
    })
  }
  const showResult = (limit)=>{
    let newmatches = matches.filter(match=>{
      return match.result == limit
    })
    dispatch({
      ...state,
           filterMatches: limit === 'All' ? matches : newmatches,
            playedFilter: 'All',
            resultFilter: limit
    })
  }
    return(
        <>
        {
            matches?
              <div className="the_matches_container">
                    <div className="the_matches_wrapper">
                        <div className="left">
                            <div className="match_filters">
                                <div className="match_filters_box">
                                    <div className="tag">
                                        Show Matches
                                    </div>
                                    <div className="cont">
                                        <div className={`option ${state.playedFilter === 'All' ? 'active' : ''}`}
                                            onClick={()=> showPlayed('All')}
                                        >
                                            All
                                        </div>
                                        <div className={`option ${state.playedFilter === 'yes' ? 'active' : ''}`}
                                            onClick={()=> showPlayed('yes')}
                                        >
                                            Played
                                        </div>
                                        <div className={`option ${state.playedFilter === 'no' ? 'active' : ''}`}
                                            onClick={()=> showPlayed('no')}
                                        >
                                            Not Played
                                        </div>
                                    </div>
                                </div>
                                <div className="match_filters_box">
                                    <div className="tag">
                                        Result games
                                    </div>
                                    <div className="cont">
                                        <div className={`option ${state.resultFilter === 'All' ? 'active' : ''}`}
                                            onClick={()=> showResult('All') }
                                        >
                                            All
                                        </div>
                                        <div className={`option ${state.resultFilter === 'W' ? 'active' : ''}`}
                                            onClick={()=> showResult('W')}
                                        >
                                            W
                                        </div>
                                        <div className={`option ${state.resultFilter === 'L' ? 'active' : ''}`}
                                            onClick={()=>  showResult('L')}
                                        >
                                           L
                                        </div>
                                        <div className={`option ${state.resultFilter === 'D' ? 'active' : ''}`}
                                            onClick={()=> showResult('D')}
                                        >
                                           D
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <MatchesList matches={state.filterMatches} />
                        </div>
                        <div className="right">
                           <MatchTable />
                        </div>
                    </div>
                </div>
        
            :
                <div className="progress">
                    <CircularProgress/>
                </div>
        }
        </>

    )
}