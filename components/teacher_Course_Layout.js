import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import fetch from 'isomorphic-fetch'
import route from 'next-routes'
import Top_highlights_course_teacher from '../components/Top_highlights_course_teacher'
import All_course_teacher from '../components/all_course_teacher'
import SAT_teacher from '../components/SAT_teacher'
import GATPAT_store_teacher from '../components/GATPAT_store_teacher'
import Thai_teacher from '../components/Thai_teacher'
import English_teacher from '../components/English_teacher'
import TabsCategory from '../components/TabsCategory'
export default class Teacher_Course_Layout extends React.Component {
    render(){
        return (
            <div>
                <TabsCategory/>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="home">
                        <Top_highlights_course_teacher/>
                        <br/>
                        <div className="clearfix">
                        <All_course_teacher/>
                        </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="gatpat">
                        <GATPAT_store_teacher/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="sat">
                        <SAT_teacher/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="thai">
                        <Thai_teacher/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="english">
                        <English_teacher/>
                    </div>
                </div>
            </div>
        )
    }
}