// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
display:flex
justify-content:center;
align-items:center;
min-height:100vh;
`
export const MemeGeneratorContainer = styled.div`
display:flex;
flex-direction:column;
width:100%;
max-width:550px;
padding:32px 24px 32px 24px;
@media screen and (min-width: 768px){
  width:85%;
  max-width:1140px;
}
`
export const FormAndMemeContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  @media screen and (min-width: 768px){
    flex-direction:row-reverse;
  }
`
export const Heading = styled.h1`
  font-family:Open Sans;
  color:#35469c;
  font-size:24px;
  font-weight:bold;
  margin-bottom:16px;
  text-align:center;
  @media screen and (min-width: 768px){
    text-align:left;
    font-size:32px;
  }
`

export const MemeContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  text-align:center;
  background-image:url(${props => props.backgroundImgUrl});
  background-size:cover;
  height:300px;
  padding:10px;
  margin-bottom:50px;
  @media screen and (min-width:768px){
    width:48%;
    margin-top:5px;
    margin-bottom:20px;
  }
`

export const TextContent = styled.p`
  font-size:${props => props.activeFontSizeId}px;
  color:#ffffff;
  font-weight:600;
  font-family:'Open Sans';
`
export const MemeGeneratorForm = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  @media screen and (min-width:768px){
    width:40%;
  }
`
export const CustomLabel = styled.label`
  color: #7e858e;
  font-size:12px;
  font-family:'Open Sans';
  font-weight:500;
`
export const CustomInput = styled.input`
  color:#5a7184;
  background-color:#ffffff;
  font-family:Open Sans;
  font-size:18px;
  height:40px;
  border :1px solid #d7dfe9;
  border-radius:5px;
  padding:12px 14px 12px 14px;
  margin-top:5px;
  margin-bottom:20px;
  outline:none;
`
export const CustomSelect = styled.select`
  color:#1e293b;
  background-color:#ffffff;
  font-family:Open Sans;
  border:1px solid #d7dfe9;
  border-radius:5px;
  padding:10px;
  margin-top:10px;
  margin-bottom:10px;
  outline:none;
`

export const CustomOption = styled.option`
  font-size:16px;
  padding:12px 14px 12px 14px;
`
export const GenerateButton = styled.button`
  color:#ffffff;
  background-color:#0b69ff;
  border:none;
  border-radius:5px;
  font-family:Open Sans;
  font-size:14px;
  font-weight:600;
  cursor:pointer;
  outline:none;
  padding:12px 24px 12px 24px;
  min-width:25px;
  max-width:150px;
`
