import React from 'react'
import './styles/paginate.css'

const Paginate = ({ page, setPage, totalPages }) => {
    
    const nextPage = () => {
        if (page < totalPages) {
            setPage(page + 1)
        }
    }
    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const selectPage1 = () => {
        setPage(page)
    }
    const selectPage2 = () => {
        setPage(page + 1)
    }
    const selectPage3 = () => {
        setPage(page + 2)
    }
    const selectPage4 = () => {
        setPage(page + 3)
    }
    return (
        <nav className='paginate'>
            <a className={`paginate__previous ${page === 1}`} onClick={prevPage}><box-icon type='solid' name='chevron-left'></box-icon></a>
            <ul className='paginate__list'>
                <li className='paginate__list-page'>
                    <a className="paginate__link active" onClick={selectPage1}>{page}</a>
                </li>
                <li className='paginate__list-page'>
                    <a className="paginate__link" onClick={selectPage2}>{page + 1}</a>
                </li>
                <li className='paginate__list-page'>
                    <a className="paginate__link" onClick={selectPage3}>{page + 2}</a>
                </li>
                <li className='paginate__list-page'>
                    <a className="paginate__link" onClick={selectPage4}>{page + 3}</a>
                </li>
            </ul>
            <a className={`paginate__next ${page >= totalPages ? 'is-disable' : ''}`} onClick={nextPage}><box-icon name='chevron-right' type='solid' ></box-icon></a>
        </nav>
    )
}

export default Paginate