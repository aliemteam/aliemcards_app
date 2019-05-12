import Colors from './colors';

export const css = `
body {
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5rem;
}

img {
  width: 100%
}

h1 {
  background-color: ${Colors.lightGray};
  padding: 5px;
  border-bottom: 4px solid ${Colors.accent};
  font-size: 2rem;
  line-height: 2.5rem;
}

.drug {
  font-weight: bold;
  color: ${Colors.drugColor};
}

.card__meta {
  font-size: .8em;
  margin: 0px;
}

.card__meta > div {
    color: ${Colors.fontPrimary};
    background: ${Colors.lightGray};
    padding: 5px 10px;
    margin: 0 0 10px 0;
}

.card__content h1:first-of-type {
  display: none;
}

#references {
    background-color: ${Colors.lightGray};
    border: 0;
    margin: 20px 0 0 0;
    border-radius: 2px 2px 0 0;
    color: ${Colors.fontPrimary};
    padding: 10px;
    padding-bottom: 0;
}

#references + ul, references + ol {
  margin-top: 0;
  background-color: ${Colors.lightGray};
  border-radius: 0 0 2px 2px;
  padding: 20px 40px;
}
        
#references li {
  margin-bottom: 20px
}


table {
  border-collapse: collapse;
  border-spacing: 0;
  max-width: 100vw;
  margin: auto;
  margin-bottom: 1.5em;
  border: 0;
  box-shadow: ${Colors.shadow};  
}

thead>tr>td,
thead>tr>th,
tbody>tr>th {
  background-color: ${Colors.accent};
  text-align: left;
  font-weight: bold;
  color: white;
  padding: 6px 12px;
}

tr:nth-child(odd) {
  background-color: ${Colors.tertiary};
}

td, th {
  padding: .8em
  vertical-align: top
}

tfoot {
  font-size: .8em
}

tfoot tr {
    background-color: white !important // @stylint ignore
    border-top: solid ${Colors.borderColor} 1px
}

tfoot td {
    text-align: justify;
    padding: 0 .8em;
    color: ${Colors.lightGray};
}
tfoot p {
  margin: 10px 0 !important // @stylint ignore
  line-height: 1.5em
}

// https://codepen.io/dbushell/pen/wGaamR
// table {
//   vertical-align: top;
//   max-width: 100vw;
//   overflow-x: auto;
//   white-space: nowrap;
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   background: none;
//   border-collapse: collapse;
//   border-spacing: 0;
// }

// th {
//   text-align: left;
// }

// thead {
//   display: flex;
//   width: 100;
// }

// tbody {
//   display: flex;
//   flex-shrink: 4;
//   position: relative;
//   overflow-x: auto;
//   overflow-y: hidden;
// }

// tr {
//   display: flex;
//   flex-direction: column;
//   min-width: min-content;
//   flex-shrink: 0;
// }

// td,
// th {
//   display: block;
// }
`