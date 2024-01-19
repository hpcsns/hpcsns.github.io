- **Trantor Specificities**
	- All calculations must be submitted as jobs to the PBS scheduling system, it is forbidden to run computations on the head nodes or on the computing nodes bypassing the queue system.
	- The head nodes are the only nodes with external internet connection, so you should download packages and setup your virtual environments on those, while computation heavy calculations should be run on the computing nodes.
	- **Head Nodes**: trantor01.sns.it, trantor02.sns.it, trantor03.sns.it.
	  Connect via SSH from inside SNS network. If outside use the [VPN]([[VPN Access]]).
	- **Public Queues**: q02daneel q07daneel q14daneel (GPU nodes), q02hal q07hal q14hal (CPU nodes).
	- **Jupyter Notebook**: https://jupyter.sns.it/
- **Common Commands**
	- `qsub -q <queue> <script>` to send a script for execution on a queue.
	  `qstat -q` lists the available queues, with details about the maximum resources that can be requested in each queue.
	  `qsub -q <queue> -l select=1:ncpus=4:ngpus=1:mem=8096mb <script>` ask for a single compute node, 4 CPUs, 1 GPUs, 8GB RAM.
	  `qsub -I -q <queue>` ask for an interactive session (note the capital i flag), available on short-running queues.
	- `qstat <jobid>` to get informations about the job. The status column can be in different states: (R) the job is running (E) the job is exiting after having run (H) the job is held, i.e. it is not going to run until released (Q) the job is queues and will run when the requested resources become available (W) the job is waiting to be execueted at a later user-specified time.
	  Using `qstat -f <jobid>` gives more detailed information about the job.
	- `qdel <jobid>` to delete a job. It is `SIGKILL`ed if running, otherwise it is just removed from the queue.