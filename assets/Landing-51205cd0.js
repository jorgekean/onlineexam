import{L as o,u as r,a as n,b as i,c as m,m as e,j as c}from"./main-098cb545.js";import{r as s,a as d}from"./chartjs-8cd8481c.js";import"./fullcalendar-c40e6606.js";import"./apexcharts-042e6b4d.js";/* empty css              */const u=()=>s.useContext(o),L=()=>{r(),n(),u();const{user:a}=i(),t=m();return s.useEffect(()=>{(a==null?void 0:a.role)==="teacher"?t(`${e.baseURL}/dashboard`):(a==null?void 0:a.role)==="student"?t(`${e.baseURL}/studentDashboard`):(a==null?void 0:a.role)==="schooladmin"&&t(`${e.baseURL}/schoolDashboard`)},[]),c(d.Fragment,{})};export{L as default};