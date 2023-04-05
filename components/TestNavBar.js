import Link from 'next/link';


function Navbar (){
    const HandlelogoClick = () => {
        window.scrollTo({ top : 0, behavior: 'smooth'});
    }
  return (
    <nav>
      <div className="left" onClick={HandlelogoClick}> {/* 왼쪽 요소 */}
        <Link legacyBehavior href="/">
          <a><img src="/images/rolling.png" alt="Logo" /></a>
        </Link>
      </div>
      <div className="center"> {/* 가운데 요소 */}
        <div className="search-box">
          <input
            className="search-input"
            type="search"
            placeholder="검색"
            aria-label="Search"
          />
        </div>
      </div>
      <div className="right"> {/* 오른쪽 요소 */}
        <div className="box">
          
        </div>
      </div>

      <style jsx>{`
        nav {
            background-color: white;
            color: #fff;
            height: 80px;
            width: 100vw;
            display: flex;
            align-items: left;
            padding: 13px;
            position: fixed;
            z-index: 999;
            top: 0px;
            right: 0px; 
            left: 0px;
            width: 100%;
            height: 50px;
            position: fixed;
        }
        .left {
          flex-basis: 0%;
        }
        .center {
          flex-basis: 100%;
          display: flex;
          justify-content: center;
          
        }
        .search-box {
          background-color: white;
          width: 300px;
          border-radius: 30px;
        }
        .search-input {
          border: none;
          background-color: #f2f2f2;
          padding: 5px 10px;
          width: 300px;
          margin-left: auto;
        }
        .right {
          flex-basis: 20%;
          /*height : 100px;*/
          /*width : 100px;*/
        }
        nav img {
                max-width: 100px;
                margin-bottom: 5px;
        }
        .box {
          background-color: #f2f2f2;
          padding: 10px 5px;
          border-radius: 20px;
          height : 100px;
          width : 100px;
        
        
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
