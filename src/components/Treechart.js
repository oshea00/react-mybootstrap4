import React from 'react'
// This component uses the echarts library to draw tree charts.
// It depends on the echarts javascript library to be loaded
// in the root document context - usually index.html. 
//     <script src='%PUBLIC_URL%/echarts.js'></script>
//
// For information on the tree series data format used by
// eCharts:
// see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree
//
// Example tag usage:
// <Treechart 
//   height="300" 
//   width="800" 
//   title="Fig 1 - Introspecting the DOM." 
//   data={DomTree}
//   dataId="body"
//   maxDepth="10"/>


export default class Treechart extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    
    componentDidMount() {
        const chart = window.echarts.init(this.ref.current);
        chart.setOption({
            title: { 
                text: this.props.title,
                textStyle: { 
                    color: 'black',
                },
                bottom: -10,
                left: 0,
            },
            animation: false,
            tooltip: {},
            series: [{
                type: 'tree',
                initialTreeDepth: this.props.maxDepth,
                // This expects a data retrieval function
                // that takes an id - see example DomTree below.
                data: this.props.data(this.props.dataId),
                left: '10%',
                right: '10%',
                top: '20%',
                bottom: '30%',
                symbol: 'roundRect', // rect, roundRect, triangle, diamond, pin
                symbolSize: 10,
                orient: 'vertical',
                label: {
                    normal: {
                        position: 'top',
                        rotate: 0,
                        align: 'middle',
                        fontSize: 14
                    }
                },
                leaves: {
                    label: {
                        position: 'bottom',
                        rotate: 0,
                        align: 'middle',
                        fontSize: 14
                    }
                }
            }]
        });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div id="treechart" style={{width:this.props.width+'px', 
                        height:this.props.height+'px'}} 
                 ref={this.ref}>
            </div>
        );
    }
}

// Tree data retrieval function that returns a data series
// object for the "tree" series in echarts (eTree).
// This general pattern could be used with any other tree source
// data. The function takes a "root" element from the source tree
// and traverses it using that tree source's native API (in this case
// DOM API), and builds a data series in the shape expected by
// echarts - building up the eTree object in the closure.
//
// The function signature accepts an "id" - which is used in this
// case to get a matching root DOM element (first tries as an id then
// as a tagName).  This could be a database id as well - you get the idea.
//
export const DomTree = (id) => {
    var eTree = {};
    eTree.children = [];
    var element = null;

    function makeDomTree(root,etree) {
      var eNode = {
        name: (root.id !== "") ? root.id : root.tagName,
        children: []
      };
      etree.children.push(eNode)
      if (root.hasChildNodes()) {
        for (var i=0;i<root.children.length;i++)
            makeDomTree(root.children[i],eNode);
      }
    }

    element = document.getElementById(id);
    if (element == null) 
        element = document.getElementsByTagName(id)[0];
    makeDomTree(element,eTree);
    return eTree.children;
  }
  
