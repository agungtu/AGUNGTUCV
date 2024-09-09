import ExpertiseCard from "./ExpertiseCard";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import { Card } from "antd";

const MyExpertise = () => {
  const { isLoading, error, data } = useQuery("expertise", () =>
    axios
      .get("api/expertise")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        My profile
      </div>
      <Card className="rounded-xl col-sm-6 card" style={{ backgroundColor: "greenyellow", padding: "20px" }}>
  <div className="flex flex-col md:flex-row items-start md:items-center mb-2">
    <div className="w-full md:w-1/3 md:px-2">Nama</div>
    <div className="w-full md:w-1/12 md:px-2">:</div>
    <div className="w-full md:w-2/3 md:px-2">Agung Tri Utomo</div>
  </div>
  <div className="flex flex-col md:flex-row items-start md:items-center mb-2">
    <div className="w-full md:w-1/3 md:px-2">Umur</div>
    <div className="w-full md:w-1/12 md:px-2">:</div>
    <div className="w-full md:w-2/3 md:px-2">25 Tahun</div>
  </div>
  <div className="flex flex-col md:flex-row items-start md:items-center mb-2">
    <div className="w-full md:w-1/3 md:px-2">Alamat</div>
    <div className="w-full md:w-1/12 md:px-2">:</div>
    <div className="w-full md:w-2/3 md:px-2">Jl. Srikandi I/9 RT 03 RW 04 Kota Salatiga</div>
  </div>
  <div className="flex flex-col md:flex-row items-start md:items-center mb-2">
    <div className="w-full md:w-1/3 md:px-2">Pendidikan</div>
    <div className="w-full md:w-1/12 md:px-2">:</div>
    <div className="w-full md:w-2/3 md:px-2">
      S1 Teknik Informatika (UKSW), S2 Digital Transformation Intelligence (AMIKOM) - proses Thesis
    </div>
  </div>
  <div className="flex flex-col md:flex-row items-start md:items-center">
    <div className="w-full md:w-1/3 md:px-2">Pengalaman</div>
    <div className="w-full md:w-1/12 md:px-2">:</div>
    <div className="w-full md:w-2/3 md:px-2">-+ 3 Tahun (Programmer)</div>
  </div>
</Card>




      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        My Expertise
      </div>
      <div
        className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 rounded-xl"
        style={{ backgroundColor: "greenyellow" }}
      >
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map(() => (
              <ParagraphSkeleton className={"space-y-2 p-8"} />
            ))
          : data?.map((data, key) => <ExpertiseCard key={key} data={data} />)}
      </div>
    </>
  );
};

export default MyExpertise;
