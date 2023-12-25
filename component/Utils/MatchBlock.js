import React from "react";

export const MatchesBlock =({match})=>{

    return(
          <div className="match_block">
            <div className="match_date">
                {match.date}
            </div>
            <div className="match_wrapper">
                <div className="match_top">
                    <div className="left">
                        
                        <div className="team_name">{match.local}</div>
                    </div>
                    <div className="right">
                        { match.final ? match.resultLocal:'-'}
                    </div>
                </div>
                <div className="match_bottom">
                    <div className="left">
                        <div className="team_name">{match.away}</div>
                    </div>
                    <div className="right">
                        { match.final ? match.resultAway:'-'}
                    </div>
                </div>
            </div>

        </div>
    )
}