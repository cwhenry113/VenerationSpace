import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'

export default function venOption() {
    return (
        <div className="container" style={{ background: '#C1C6E4' }}>
            <Head style={{ background: '#BEC7E4' }}>
                <title>Veneration Space</title>
                <link rel="icon" href="/cross.ico" />
            </Head>
            <div class="ui menu" style={{ background: '#547FE8', color: 'white' }}>
                <div class="ui large header item" >
                    <a href="/" class="ui item" style={{ color: 'white' }}>
                        Home
                    </a>
                    <a href="/statpages/about" class="ui item" style={{ color: 'white' }}>
                        About Us
                    </a>
                    <a href="/statpages/apply" class="ui item" style={{ color: 'white' }}>
                        Apply
                    </a>
                    <a href="/statpages/login" class="ui item" style={{ color: 'white' }}>
                        Login
                    </a>
                    <a href="/statpages/search" class="ui item" style={{ color: 'white' }}>
                        Search
                    </a>
                    <a href="/statpages/example" class="ui item" style={{ color: 'white' }}>
                        Create
                    </a>
                </div>
            </div>
            <div class="ui main container">

                <h1 class="ui center aligned icon header">
                    <i class="settings icon"></i>
                    Veneration Options
                </h1>
                <div class="ui icon message">
                    <i class="exclamation icon"></i>
                    <div class="content">
                        <div class="header">
                            Don't forget to save!
                        </div>
                        <p>Press the "Save changes" button at the bottom when you're done to sure your Veneration includes your changes.</p>
                    </div>
                </div>
                <h2 class="ui attached header">
                    Biographic Settings
                </h2>
                <div class="ui attached segment">
                    <div class="ui form">
                        <label><h3>Name</h3></label>
                        <div class="fields">
                            <div class="field">
                                <label>First</label>
                                <input type="text" placeholder="First Name" />
                            </div>
                            <div class="field">
                                <label>Middle</label>
                                <input type="text" placeholder="Middle Name" />
                            </div>
                            <div class="field">
                                <label>Last</label>
                                <input type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <button class="ui button">
                            Submit
                        </button>
                    </div>
                    <div class="ui horizontal divider" />
                    <div class="ui form">
                        <label><h3>Date of Birth</h3></label>
                        <div class="fields">
                            <div class="field">
                                <select class="ui fluid search dropdown" name="birthMonth">
                                    <option value="">Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>
                            <div class="field">
                                <input type="text" placeholder="Day" name="birthDay" />
                            </div>
                            <div class="field">
                                <input type="text" placeholder="Year" name="birthYear" />
                            </div>
                        </div>
                        <button class="ui button">
                            Submit
                        </button>
                    </div>
                    <div class="ui horizontal divider" />
                    <div class="ui form">
                        <div class="field">
                            <label><h3>Bio</h3></label>
                            <textarea></textarea>
                        </div>
                        <button class="ui button">
                            Submit
                        </button>
                    </div>
                </div>
                <h2 class="ui attached header">
                    Comment submissions
                </h2>
                <div class="ui attached segment">
                    <p>
                        <div class="ui toggle checkbox">
                            <input type="checkbox" name="submissionStatus" />
                            <label>Allow new comments to be submitted</label>
                        </div>
                        <div class="ui toggle checkbox">
                            <input type="checkbox" name="proofreadStatus" />
                            <label>Require comments to be checked by you before showing up</label>
                        </div>
                    </p>
                </div>
                <h2 class="ui attached header">
                    Visibility
                </h2>
                <div class="ui attached segment">
                    <p>
                        <div class="ui form">
                            <div class="grouped fields">
                                <label><h3>Who should be able to see this page?</h3></label>
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
                                        <label>Nobody but you</label>
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
            </div>
            <div class="ui horizontal divider" />
            <style jsx>{`
              .container{
                  min-height: 100vh;
              }
              `}
            </style>
        </div>
    );
}