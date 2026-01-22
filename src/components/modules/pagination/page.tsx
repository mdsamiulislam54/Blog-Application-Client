"use client"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { PaginationMeta } from "@/type/pagination.type"

type Props = {
    pagination: PaginationMeta
}

const Paginations = ({ pagination }: Props) => {
    const { total, page, limit, totalpage } = pagination;
    const pageNumbers = Array.from({ length: totalpage }, (_, i) => 1 + i);

    return (
        <div className='my-10'>
            {JSON.stringify(pageNumbers)}
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    {
                        pageNumbers.map((page,i) => {
                            return (
                                <PaginationItem key={i}>
                                    <PaginationLink href="#">{page}</PaginationLink>
                                </PaginationItem>
                            )
                        })
                    }

                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default Paginations