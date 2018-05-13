import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import route from 'next-routes'
import Top_highlights_course from '../components/Top_highlights_course'
import All_course from '../components/all_course'
import SAT from '../components/sat'
import GATPAT from '../components/gat_pat'
import Thai from '../components/thai'
import English from '../components/english'
import TabsCategory from '../components/TabsCategory'
export default class Course_Layout extends React.Component {
    render(){
        return (
            <div>
                <TabsCategory/>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="home">
                        <Top_highlights_course/>
                        <br/>
                        <div className="clearfix">
                        <All_course/>
                        </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="gatpat">
                        <GATPAT/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="sat">
                        <SAT/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="thai">
                        <Thai/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="english">
                        <English/>
                    </div>
                </div>
            </div>
        )
    }
}