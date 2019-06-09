import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Navbar,
    Button
    } from 'react-bootstrap';
import Pagination from 'react-paginating';
import '../css/pagination.css'

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
                            <Navbar variant="dark">
                                <Button
                                    {...getPageItemProps({
                                        pageValue: 1,
                                        onPageChange: this.props.onPageChange
                                    })}
                                        className="btn-pagination-control"
                                    variant="outline-info"
                                >
                                    First
                                        </Button>

                                {hasPreviousPage && (
                                    <Button
                                        {...getPageItemProps({
                                            pageValue: previousPage,
                                            onPageChange: this.props.onPageChange
                                        })}
                                            className="btn-pagination-control"
                                        variant="outline-info"
                                    >
                                        {'<'}
                                    </Button>
                                )}

                                {pages.map(page => {
                                    let activePage = null;
                                    if (currentPage === page) {
                                        activePage = { backgroundColor: '#fdce09' };
                                    }
                                    return (
                                        <Button
                                            {...getPageItemProps({
                                                pageValue: page,
                                                key: page,
                                                style: activePage,
                                                onPageChange: this.props.onPageChange
                                            })}
                                            className="btn-pagination"
                                            variant="outline-info"
                                        >
                                            {page}
                                        </Button>
                                    );
                                })}

                                {hasNextPage && (
                                    <Button
                                        {...getPageItemProps({
                                            pageValue: nextPage,
                                            onPageChange: this.props.onPageChange
                                        })}
                                        className="btn-pagination-control"
                                        variant="outline-info"
                                    >
                                        {'>'}
                                    </Button>
                                )}

                                <Button
                                    {...getPageItemProps({
                                        pageValue: totalPages,
                                        onPageChange: this.props.onPageChange
                                    })}
                                    className="btn-pagination-control"
                                    variant="outline-info"
                                >
                                    Last
                                </Button>
                            </Navbar>
                        </div>
                    )}
            </Pagination>
        )
    }

}

export default RenderPagination;
