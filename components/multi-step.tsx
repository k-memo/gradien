'use client'

import { useState } from 'react'
import ColorPickerForm from './color-picker-form'
import { FiCamera } from "react-icons/fi";
import { FaRegImage } from "react-icons/fa6";
import { CiExport } from "react-icons/ci";
import { FiSave } from "react-icons/fi";
import NavForm from './nav-form';

export default function Form() {
    return(
        <>
            <section className='multi-step'>
                <NavForm/>
                <form>
                    <div className="upload">
                        <h3>Upload Image</h3>
                        <div className="input-conatainer">
                            <input className='img-input'/>
                            <div className="choose-option">
                                <a className='btn-img'>
                                    <FiCamera />
                                    Camera
                                </a>
                                <a className='btn-img'>
                                <FaRegImage />
                                Gallery
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pick-color">
                    <ColorPickerForm/>
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
                            <a className='btn-second btn'>export <CiExport className='link-icon'/></a>
                            <a className='btn-main btn'>save colorpalette<FiSave  className='link-icon'/></a>    
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