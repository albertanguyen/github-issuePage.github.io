import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-paginating';
import './pagination.css'

class RenderPagination extends Component {

    render() {
        return (
            <Pagination
                total={this.props.lastPage * 30}
                limit={30}
                pageCount={5}
                currentPage={this.props.currentPage}
            >
                {({
                    pages,
                    currentPage,
                    hasNextPage,
                    hasPreviousPage,
                    previousPage,
                    nextPage,
                    totalPages,
                    getPageItemProps
                }) => (
                        <div>
                            <button
                                {...getPageItemProps({
                                    pageValue: 1,
                                    onPageChange: this.props.onPageChange
                                })}
                                className="btn-pagination-control"
                            >
                                First
                                    </button>

                            {hasPreviousPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: previousPage,
                                        onPageChange: this.props.onPageChange
                                    })}
                                    className="btn-pagination-control"
                                >
                                    {'<'}
                                </button>
                            )}

                            {pages.map(page => {
                                let activePage = null;
                                if (currentPage === page) {
                                    activePage = { backgroundColor: '#fdce09' };
                                }
                                return (
                                    <button
                                        {...getPageItemProps({
                                            pageValue: page,
                                            key: page,
                                            style: activePage,
                                            onPageChange: this.props.onPageChange
                                        })}
                                        className="btn-pagination"
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            {hasNextPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: nextPage,
                                        onPageChange: this.props.onPageChange
                                    })}
                                    className="btn-pagination-control"
                                >
                                    {'>'}
                                </button>
                            )}

                            <button
                                {...getPageItemProps({
                                    pageValue: totalPages,
                                    onPageChange: this.props.onPageChange
                                })}
                                className="btn-pagination-control"
                            >
                                Last
              </button>
                        </div>
                    )}
            </Pagination>
        )
    }

}

export default RenderPagination;
