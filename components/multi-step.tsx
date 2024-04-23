'use client'

import { useState } from 'react'
export default function Form() {
    return(
        <>
            <section className='multi-step'>
                <nav>Navigation</nav>
                <form>
                    <div className="upload">
                        <h3>Upload Image</h3>
                        <div className="input-conatainer">
                            <input className='img-input'/>
                            <div className="choose-option">
                                <a className='btn-img'>Camera</a>
                                <a className='btn-img'>Gallery</a>
                            </div>
                        </div>
                    </div>
                    <div className="pick-color">
                        <input className='img-input'/>
                        <div className="colors">
                            <div className="color">
                                <div className="color1">

                                </div>
                                <span></span>
                            </div>
                            <div className="color">
                                <div className="color2">

                                </div>
                                <span></span>
                            </div>
                            <div className="color">
                                <div className="color3">

                                </div>
                                <span></span>
                            </div>
                        </div>
                    </div>

                    <div className="get-palette">
                        <p>Logo</p>
                        <h3>Your Colorpalette</h3>
                        <div className="palette">
                            <div className="palette-color"></div>
                            <div className="palette-color"></div>
                            <div className="palette-color"></div>
                            <div className="palette-color"></div>
                            <div className="palette-color"></div>
                            <div className="palette-color"></div>
                            <div className="palette-color"></div>
                        </div>
                        <div className="name">
                            <label>Palettename</label><input className='palette-name'/>

                        </div>
                        <div className="links">
                            <a className='btn-second btn'>export</a>
                            <a className='btn-main btn'>save</a>    
                        </div>
                    </div>
                    
                </form>


                <div className="bottom-nav">
                <input className='prev-btn btn' value={'Previous'}/>
                    <input className='btn-main btn' value={'Next'}/>
                </div>
            </section>
        </>
    )
}