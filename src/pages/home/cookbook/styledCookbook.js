import styled from "styled-components"

export const HeaderWrap = styled.div`
        height: .44rem;
        background:#ee742f;
        color:#fff;
        text-align:center;
        line-height:.44rem;
`


export const SwiperWrap = styled.div`
        height:0;
        font-size: 0;
        padding-bottom:66.66667%;
      img{
        width:100%;
     }
        
`
export const HotCateWrap = styled.div`
    heater{
        line-height:.5rem;
        background:#fff;
        padding-left:.2rem;
        border-bottom:1px solid gray;
         }
      .item{
          display:flex;
          flex-direction:column;
          align-items:center;
          img{
            width:70%;
          }
          span{
              margin-top:.05rem;
          }
      }
`
export const HotListWrap = styled.div`
        padding:0 .2rem .2rem .2rem;
        header{
          color:#666;
        }
        div{
          display:flex;
          flex-wrap:wrap;
        figure{
          width:40%;
          margin:1em 15px;
          img{
            width:100%; 
          }
          &:nth-child(odd){
            padding-right:.05rem;
          }
          &:nth-child(odd){
            padding-left:.05rem;
          }
          figcaption{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            height:.6rem
          }
        }
      }

`
