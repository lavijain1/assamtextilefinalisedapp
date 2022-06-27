import React, { useEffect } from 'react';
import _ from 'lodash';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const Pagination = (props) => {
        const {pageSize, count, currentPage, Pagechange} = props;
        const no = Math.ceil(count / pageSize);
        const pages = _.range(1 , no + 1);
    
        let custom = {
            backgroundColor: 'white',
            borderRadius: 20
        };
      
     
        const handledecrementpage = (pagenum) => {

            currentPage !== 1 ? Pagechange(pagenum - 1) : null;
        }    
        
        const handleincrementpage = (pagenum) => {
            currentPage !== no ? Pagechange(pagenum + 1) : null;

        }   


         return (        
            no === 1? null:
        <View style = {{flexDirection: 'row', padding: 5, marginTop: 5, justifyContent: 'space-evenly', backgroundColor: 'orange'}}>
            {/* {pages.map(x => {return <TouchableOpacity key = {x.toString()} style = { currentPage === x ? custom : null} onPress = {() => Pagechange(x)} ><Text style= {{ color: 'black', padding: 3}}>{x}</Text></TouchableOpacity>})} */}
          
            <TouchableOpacity style= {{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 15}} onPress = {() => handledecrementpage(currentPage)}>
               {currentPage !== 1 ? <Text style = {{fontFamily: 'Cinzel', color: 'black'}}>Previous</Text>: null}
            </TouchableOpacity>
            <TouchableOpacity style = {{flex:1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 15}} onPress = {() => handleincrementpage(currentPage)}>
            {currentPage !== no? <Text style = {{fontFamily: 'Cinzel', color: 'black'}}>Next</Text> : null}
            </TouchableOpacity>
        
        </View>
     );
}

const styles = StyleSheet.create({
    ul: {
        backgroundColor: (255, 158, 31, 0.993),
        padding: "10px 20px",
        margin: "0px",
        justifyContent: "center",
      },
      
    //   li: {
    //     list-style: none;
    //     line-height: 50px;
    //     margin: 0 5px;
    //   },
      
    //    li.pageNumber {
    //     width: 25px;
    //     height: 25px;
    //     line-height: 25px;
    //     text-align: center;
    //   }
    //   ul li a {
    //     display: block;
    //     text-decoration: none;
    //     color: rgb(117, 106, 106);
    //     font-weight: 600;
    //     border-radius: 50%;
    //   }
    //   ul li.pageNumber:hover a,
    //   ul li.pageNumber.active a {
    //     background: rgb(255, 135, 36);
    //     color: white;
    //   }
      
})
 
export default Pagination;
 
