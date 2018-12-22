import React, { Component } from 'react'

export class NewCard extends Component {
    render() {
        return (
            <div>

                <div class="row">
                    <div class="col-md-4 div2 ">
                        <div class="card text-dark bg-warning">

                            <div class="card-body div1 ">
                                <img class=" imgh" src="http://lorempixel.com/output/nature-q-c-1267-352-2.jpg" />

                            </div>

                        </div>

                    </div>
                    <div class="col-md-4 div2">
                        <div class="card text-dark bg-warning">

                            <div class="card-body div1">
                                <img class=" imgh" src="http://lorempixel.com/output/nature-q-c-1267-352-2.jpg" />

                            </div>

                        </div>

                    </div>
                    <div class="col-md-4 div2">
                        <div class="card text-dark bg-warning">

                            <div class="card-body div1 ">
                                <img class=" imgh" src="http://lorempixel.com/output/nature-q-c-1267-352-2.jpg" />

                            </div>

                        </div>

                    </div>
                </div>
                <footer class="page-footer font-small blue">


                    <div class="footer-copyright text-center py-3">Footer:
    <a href="https://mdbootstrap.com/education/bootstrap/"> Footer Content</a>
                    </div>


                </footer>

            </div>
        )
    }
}

export default NewCard
