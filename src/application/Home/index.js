import React from "react";
import {Link,Outlet} from "react-router-dom";
import MyRouter from "../../routes";
import {Tab, Top, TabItem} from "./style"

function Home(props){
    return(
        <div>
            <Top>
                <span className="iconfont menu">&#xe65c;</span>
                <span className="iconfont menu">WebApp</span>
                <span className="iconfont menu">&#xe62b;</span>
            </Top>
            <Tab>
                <Link to="/recommend" className="selected"><TabItem><span>推荐</span></TabItem></Link>
                <Link to="/singer" className="selected"><TabItem><span>歌手</span></TabItem></Link>
                <Link to="/rank" className="selected"><TabItem><span>排行榜</span></TabItem></Link>
            </Tab>
            <Outlet />
        </div>
    )
}

export default React.memo(Home);