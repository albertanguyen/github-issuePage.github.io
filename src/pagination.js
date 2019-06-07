import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-paginating';


class RenderPagination extends Component {

    render() {
        console.log(this.props.issue)
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
                            >
                                first
                                    </button>

                            {hasPreviousPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: previousPage,
                                        onPageChange: this.props.onPageChange
                                    })}
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
                                >
                                    {'>'}
                                </button>
                            )}

                            <button
                                {...getPageItemProps({
                                    pageValue: totalPages,
                                    onPageChange: this.props.onPageChange
                                })}
                            >
                                last
              </button>
                        </div>
                    )}
            </Pagination>
        )
    }

}

export default RenderPagination;
