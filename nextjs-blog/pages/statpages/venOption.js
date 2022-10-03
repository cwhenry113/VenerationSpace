import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'

export default function venOption(){
    return(
        <div className="container" style={{ background: '#C1C6E4'}}>
        <Head style={{ background: '#BEC7E4'}}>
          <title>Veneration Space</title>
          <link rel="icon" href="/cross.ico" />
        </Head>
        <div class="ui menu" style={{ background: '#547FE8', color: 'white'}}>
          <div class="ui large header item" >
              <a href="/" class="ui item" style={{ color: 'white'}}>
                Home
              </a>
              <a href="/statpages/about" class="ui item" style={{ color: 'white'}}>
                About Us
              </a>
              <a href="/statpages/apply" class="ui item" style={{ color: 'white'}}>
                Apply
              </a>
              <a href="/statpages/login" class="ui item" style={{ color: 'white'}}>
                Login
              </a>
              <a href="/statpages/search" class="ui item" style={{ color: 'white'}}>
                Search
              </a>
              <a href="/statpages/example" class="ui item" style={{ color: 'white'}}>
                Create
              </a>
          </div>
        </div>
        <h2 class="ui center aligned icon header">
                <i class="settings icon"></i>
                Veneration Options
            </h2>
            <h3 class="ui attached header">
                Biographic Settings
            </h3>
            <div class="ui attached segment">
                <p>
                </p>
            </div>
            <h3 class="ui attached header">
                Comment submissions - Who can talk on this page?
            </h3>
            <div class="ui attached segment">
                <p>
                    <div class="ui toggle checkbox">
                        <input type="checkbox" name="public" />
                            <label>Allow new comments to be submitted</label>
                    </div>
                    <div class="ui toggle checkbox">
                        <input type="checkbox" name="public" />
                            <label>Require comments to be checked by you before showing up</label>
                    </div>          
                </p>
            </div>
            <h3 class="ui attached header">
                Visibility - Who can see this page?
            </h3>
            <div class="ui attached segment">
                <p>
                    <div class="ui form">
                        <div class="grouped fields">
                            <label>Who should be able to see this page?</label>
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="example2" checked="checked" />
                                        <label>Anybody</label>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="example2" />
                                        <label>People with a link to the page</label>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="example2" />
                                        <label>Nobody but me</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </p>
            </div>
            <button class="ui primary button">
                Save changes
            </button>
            <button class="ui button">
                Discard changes
            </button>
          <style jsx>{`
              .container{
                  min-height: 100vh;
              }
              `}
          </style>
      </div>
    );
}